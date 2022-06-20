import { Card } from '@components/Card';
import { Tag } from '@components/Tag';
import { Date } from '@components/icons';

import { PostImage } from './PostImage';

export const PostThumbnail = () => (
    <div className="flex px-6 mb-8 sm:mb-16 w-full sm:w-6/12">
        <Card className="flex-1">
            <PostImage
                src={
                    'https://www.prog-ocean.org/wp-content/uploads/2018/07/matt-howard-248418-unsplash_small-1920x900.jpg'
                }
            />
            <div className="px-3 pb-3 sm:px-6 sm:pb-6">
                <h2 className="text-1xl sm:text-2xl font-bold mb-3">
                    Strapi Serverless 구축하기
                </h2>
                <ul className="flex flex-row justify-between items-center my-3">
                    <li>
                        <ul className="inline-flex space-x-2">
                            <Tag>{'태그 1'}</Tag>
                            <Tag>{'태그 2'}</Tag>
                        </ul>
                    </li>
                    <li className="inline-flex items-center">
                        <Date className="w-4 h-4 mr-1" />
                        2022.06.19
                    </li>
                </ul>
                <p className="text-sm sm:text-lg">
                    {`wlog를 개발과정중에 문득 ssg방식으로 구축할건데 서버가 굳이
            필요할까라는 결론을 내리게 되었고 serverless...wlog를 개발과정중에 문득 ssg방식으로 구축할건데 서버가 굳이
            필요할까라는 결론을 내리게 되었고 serverless...wlog를 개발과정중에 문득 ssg방식으로 구축할건데 서버가 굳이
            필요할까라는 결론을 내리게 되었고 serverless...wlog를 개발과정중에 문득 ssg방식으로 구축할건데 서버가 굳이
            필요할까라는 결론을 내리게 되었고 serverless...`.substring(0, 120)}
                </p>
            </div>
        </Card>
    </div>
);
