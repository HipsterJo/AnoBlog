import BlogPostWrapper from '../components/BlogPostWrapper'
import {Post} from '../@types/Post'
import Header from '@/components/Header'


const posts:[Post] = [
    {
        id: 1,
        title: 'My first post',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nunc nisl eget nisl. Donec auctor, nisl eget ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nunc nisl eget nisl.',
        date: '2021-01-01',
        likes: 10,
        comments: 5,
        reposts: 2,
        saved: false,
        author: {
            
            name: 'John Doe',
            community: 'John Doe Community',
            avatar: 'https://bit.ly/dan-abramov'
        },
        views: 100,
        previewImage: 'https://staticg.sportskeeda.com/editor/2022/10/f7da1-16661616016940-1920.jpg'
    },]



const   Index = () => {
    return(
        <>
        <Header/>
            <BlogPostWrapper post={posts[0]}/>
        </>
    )
} 


export default Index