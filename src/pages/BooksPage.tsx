import Layout from "@/layout/MainLayout";
import { BookList } from "@/components/BookList/BookList";

const BooksPage = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-start w-full mt-6">
        <BookList />
      </div>
    </Layout>
  );
};

export default BooksPage;
