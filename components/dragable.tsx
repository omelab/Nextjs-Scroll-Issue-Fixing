'use client';
import React, { useState } from 'react';
import styles from '@/styles/Sortable.module.scss'; // Import SCSS file

interface Item {
  id: string;
  content: string;
  children?: Item[];
}

interface DraggableProps {
  id: string;
  onDragStart?: (event: React.DragEvent<HTMLDivElement>) => void;
  children: any;
}

interface DroppableProps {
  id: string;
  onDrop?: (event: React.DragEvent<HTMLDivElement>) => void;
  children: any;
}

interface SortableProps {
  items: Item[];
  onSort: (dragItemId: string, dropItemId: string) => void;
}

interface NestedSortableProps {
  item: Item;
  onSort: (dragItemId: string, dropItemId: string) => void;
}

// Draggable Component
const Draggable: React.FC<DraggableProps> = ({ id, onDragStart, children }) => {
  const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    event.dataTransfer.setData('text/plain', id);
    onDragStart && onDragStart(event);
  };

  return (
    <div className={styles.draggable} draggable onDragStart={handleDragStart}>
      {children}
    </div>
  );
};

// Droppable Component
const Droppable: React.FC<DroppableProps> = ({ id, onDrop, children }) => {
  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    onDrop && onDrop(event);
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  return (
    <div
      className={styles.droppable}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      {children}
    </div>
  );
};

// Sortable Component
const Sortable: React.FC<SortableProps> = ({ items, onSort }) => {
  return (
    <div className={styles.sortable}>
      {items.map((item) => (
        <NestedSortable key={item.id} item={item} onSort={onSort} />
      ))}
    </div>
  );
};

// NestedSortable Component
const NestedSortable: React.FC<NestedSortableProps> = ({ item, onSort }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [children, setChildren] = useState<Item[]>(item.children || []);

  const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    event.stopPropagation();
    setIsDragging(true);
    event.dataTransfer.setData('text/plain', item.id);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);
    const dragItemId = event.dataTransfer.getData('text/plain');
    onSort(dragItemId, item.id);

    // Update children state
    const updatedChildren = children.filter((child) => child.id !== dragItemId);
    setChildren(updatedChildren);
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  return (
    <div
      className={`${styles.nestedSortable} ${
        isDragging ? styles.draggable : ''
      }`}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      draggable={!isDragging}
    >
      <div>{item.content}</div>
      {children.map((child) => (
        <div key={child.id}>
          <NestedSortable item={child} onSort={onSort} />
        </div>
      ))}
    </div>
  );
};

// Usage in your Next.js component
const MySortableComponent: React.FC = () => {
  const initialItems: Item[] = [
    {
      id: '1',
      content: 'Item 1',
      children: [
        { id: '1.1', content: 'Item 1.1' },
        { id: '1.2', content: 'Item 1.2' },
      ],
    },
    { id: '2', content: 'Item 2' },
    { id: '3', content: 'Item 3' },
  ];

  const [items, setItems] = useState<Item[]>(initialItems);

  const handleSort = (dragItemId: string, dropItemId: string) => {
    // Implement sorting logic here
    // For simplicity, this example assumes a flat list of items
    console.log('Dragged Item:', dragItemId);
    console.log('Dropped Item:', dropItemId);
  };

  return <Sortable items={items} onSort={handleSort} />;
};

export default MySortableComponent;
