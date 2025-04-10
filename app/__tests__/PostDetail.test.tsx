import { render, screen, waitFor } from '@testing-library/react';
import PostDetail, { getServerSideProps } from '../posts/[id]';
import { Post } from '../types/Post';
import fetch from 'node-fetch';

jest.mock('node-fetch', () => jest.fn());

describe('PostDetail', () => {
  it('should display post details', async () => {
    const mockPost = {
      title: 'Test Post Title',
      body: 'Test Post Body Content',
    };

    (fetch as jest.Mock).mockResolvedValueOnce({
      json: () => Promise.resolve(mockPost),
    });

    const { props } = await getServerSideProps({
      params: { id: '1' },
    });

    render(<PostDetail post={props.post} />);

    await waitFor(() => {
      expect(screen.getByText('Test Post Title')).toBeInTheDocument();
      expect(screen.getByText('Test Post Body Content')).toBeInTheDocument();
    });
  });

  it('should call getServerSideProps with correct parameters', async () => {
    const mockPost = {
      title: 'Test Post Title',
      body: 'Test Post Body Content',
    };

    (fetch as jest.Mock).mockResolvedValueOnce({
      json: () => Promise.resolve(mockPost),
    });

    const context = {
      params: { id: '1' },
    };

    const { props } = await getServerSideProps(context);

    expect(props.post.title).toBe('Test Post Title');
    expect(props.post.body).toBe('Test Post Body Content');
  });
});
