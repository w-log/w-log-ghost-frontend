const PostDescription = ({ text }: { text?: string }) => (
    <p className="whitespace-pre-wrap pt-4 px-4 sm:px-6 max-w-xl font-medium text-xl mx-auto">
        {text}
    </p>
);

export default PostDescription;
