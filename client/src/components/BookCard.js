import React from 'react';
import { Media, Container } from 'reactstrap';

const Book = () => {
  return (
    <Container className="p-4 border border-dark rounded-lg">
    <Media>
      <Media left href="http://books.google.com/books?id=sazytgAACAAJ&dq=title:The+Hunger+Games&hl=&source=gbs_api">
        <Media alt="image" /><img src="http://books.google.com/books/content?id=sazytgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api" />
      </Media>
      <Media body className="p-4">
        <Media heading>
          The Hunger Games
        <Media>
            Author: Suzanne Collins
        </Media>
        </Media>
        Set in a dark vision of the near future, a terrifying reality TV show is taking place. Twelve boys and twelve girls are forced to appear in a live event called The Hunger Games. There is only one rule: kill or be killed. When sixteen-year-old Katniss Everdeen steps forward to take her younger sister's place in the games, she sees it as a death sentence. But Katniss has been close to death before. For her, survival is second nature.
      </Media>
    </Media>
    </Container>
  );
};

export default Book;