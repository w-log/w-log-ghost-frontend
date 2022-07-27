import dayjs from 'dayjs';

import { IPost } from '@/interface/Post';

import { Card } from '@components/Card';
import { Tag } from '@components/Tag';
import { Date } from '@components/icons';

import { PostImage } from './PostImage';

interface Props {
    post: IPost;
}
export const PostThumbnail: React.FC<Props> = ({ post }) => {
    return (
        <div className="flex px-6 mb-8 sm:mb-16 w-full sm:w-6/12">
            <Card className="flex-1" href={`/post-view/${post.slug}`}>
                <PostImage
                    src={
                        'https://www.prog-ocean.org/wp-content/uploads/2018/07/matt-howard-248418-unsplash_small-1920x900.jpg'
                    }
                    loading={'lazy'}
                />
                <div className="px-3 pb-3 sm:px-6 sm:pb-6">
                    <h2 className="text-1xl sm:text-2xl font-bold mb-3">
                        {post.title}
                    </h2>
                    <ul className="flex flex-row justify-between items-center my-3">
                        <li>
                            <ul className="inline-flex space-x-2">
                                {(post.post_categories?.data ?? []).map(
                                    ({ id, attributes }) => (
                                        <Tag key={id}>{attributes.label}</Tag>
                                    )
                                )}
                            </ul>
                        </li>
                        <li className="inline-flex font-medium items-center text-xs sm:text-base">
                            <Date className="w-4 h-4 mr-1" />
                            {dayjs(post.createdAt).format('YYYY.MM.DD')}
                        </li>
                    </ul>
                    <p className="text-sm sm:text-lg">
                        {`${post.description}`.substring(0, 120)}
                    </p>
                </div>
            </Card>
        </div>
    );
};
