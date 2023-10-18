import Link from 'next/link';
import dayjs from 'dayjs';

import { ArrowRight } from '@components/icons';
import { Container } from '@components/layout/Container';

import { HomeMainSection } from '@components/home/HomeMainSection';
import { HomeTitleContent } from '@components/home/HomeTitle';
import { HomeContent } from '@components/home/HomeContent';
import { HomePostCard } from '@components/home/HomePostCard';

const Home = (props: any) => {
    const { about, recentPosts } = props ?? { about: {}, recentPosts: [] };

    // const { main_title, main_description, works, about_me, profile_image } = {} as any;

    return (
        <>
            {/* <Seo /> */}
            <Container
                className={`home-main w-100 flex flex-col px-8 sm:px-12 flex-column justify-between items-center`}
            >
                <HomeMainSection
                    title={'main_title'}
                    titleContent={<HomeTitleContent text={'main_title'} />}
                    description={'main_description'}
                />

                <HomeContent title="Recent Posts">
                    {[1].map((post, i) => (
                        <HomePostCard
                            key={i}
                            title={'타이틀'}
                            description={'디스크립션'}
                            href={`/post-view/1`}
                            createdAt={dayjs().format('YYYY.MM.DD')}
                        />
                    ))}

                    <Link href={'/posts'}>
                        <a className="inline-flex font-medium items-center text-primary-2 dark:text-secondary">
                            {'View More'}
                            <ArrowRight className="ml-0.5 w-4 h-4" />
                        </a>
                    </Link>
                </HomeContent>
                <HomeContent title="Work Experience">
                    {/* {works.map((work, i) => (
                        <HomeWorkExperienceCard
                            key={i}
                            name={work.work_name}
                            position={work.work_position}
                            joinDate={work.work_join_date}
                            outDate={work.work_out_date}
                        />
                    ))} */}
                </HomeContent>
                <HomeContent title="About Me">
                    <p className="whitespace-pre-wrap font-medium">
                        {'about_me'}
                    </p>
                </HomeContent>
            </Container>
            <Container className="m-0">
                {/* <StrapiImage image={profile_image} /> */}
            </Container>
        </>
    );
};

export default Home;
