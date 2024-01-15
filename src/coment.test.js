import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CommentBox from './CommentBox';

test('insere dois comentários', () => {
  render(<CommentBox />);

  const listaComentarios = screen.getByTestId('comment-list');
  expect(listaComentarios.children.length).toBe(0);

  fireEvent.change(screen.getByTestId('comment-input'), { target: { value: 'Primeiro Comentário' } });
  fireEvent.click(screen.getByTestId('submit-button'));

  expect(listaComentarios.children.length).toBe(1);
  expect(screen.getByTestId('comment-item-0')).toHaveTextContent('Primeiro Comentário');

  fireEvent.change(screen.getByTestId('comment-input'), { target: { value: 'Segundo Comentário' } });
  fireEvent.click(screen.getByTestId('submit-button'));

  expect(listaComentarios.children.length).toBe(2);
  expect(screen.getByTestId('comment-item-1')).toHaveTextContent('Segundo Comentário');
});