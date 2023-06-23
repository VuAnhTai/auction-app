import { TypeEnum, type Item } from '@/common/types';
import { use } from 'chai';
import React, { useCallback, useEffect } from 'react';
import Countdown from 'react-countdown';

type Props = {
  data: Item[];
  onClickBid: (item: Item) => void;
  onClickPublish: (item: Item) => void;
  onRefresh: () => void;
};

const renderer = ({
  hours,
  minutes,
  seconds,
  completed,
}: {
  hours: number;
  minutes: number;
  seconds: number;
  completed: boolean;
}) => {
  if (completed) {
    // Render a completed state
    return <span>Completed</span>;
  } else {
    // Render a countdown
    return (
      <span>
        {hours}:{minutes}:{seconds}
      </span>
    );
  }
};

export const ListItem = ({ data, onClickBid, onClickPublish }: Props) => {
  const [items, setItems] = React.useState<Item[]>(data);
  useEffect(() => {
    setItems(data);
  }, [data]);

  const handleBid = (item: Item) => {
    onClickBid(item);
  };

  const handlePublish = (item: Item) => {
    onClickPublish(item);
  };

  const handleComplete = useCallback(
    (id: number) => {
      const newItems = items.map(item => {
        if (item.id === id) {
          return {
            ...item,
            type: TypeEnum.COMPLETED,
          };
        }
        return item;
      });
      setItems(newItems);
    },
    [items]
  );

  return (
    <table className='table-auto w-full'>
      <thead>
        <tr className='bg-gray-200'>
          <th className='px-4 py-2 text-left'>Name</th>
          <th className='px-4 py-2 text-left'>Current Price</th>
          <th className='px-4 py-2 text-left'>Duration</th>
          <th className='px-4 py-2 text-left'>Action</th>
        </tr>
      </thead>
      <tbody>
        {items.length ? (
          items.map((item, index) => {
            return (
              <tr className='border-b' key={index}>
                <td className='px-4 py-2'>{item.name}</td>
                <td className='px-4 py-2'>{item.currentPrice}</td>
                <td className='px-4 py-2'>
                  {item.type === TypeEnum.DRAFT ? (
                    <button
                      className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                      onClick={() => {
                        handlePublish(item);
                      }}>
                      Publish
                    </button>
                  ) : (
                    <Countdown
                      date={Date.now() + item.duration * 1000}
                      renderer={renderer}
                      onComplete={() => {
                        handleComplete(item.id);
                      }}
                    />
                  )}
                </td>
                <td className='px-4 py-2'>
                  {item.type === TypeEnum.PUBLISHED ? (
                    <button
                      className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4'
                      onClick={() => {
                        handleBid(item);
                      }}>
                      Bid
                    </button>
                  ) : null}
                </td>
              </tr>
            );
          })
        ) : (
          <tr>
            <td colSpan={4} className='text-center'>
              No data
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};
