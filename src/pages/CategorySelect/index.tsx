import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { categories } from '../../utils/categories';

import  Button  from '../../components/Forms/Button';
import { 
  Container,
  Header,
  Title,
  Category,
  Icon,
  Name,
  Separator,
  Footer,

} from './styles';

interface Category {
  key: string;
  name: string;
}

interface CategorySelectProps {
  category: string;
  setCategory: (category: Category) => void; 
  closeSelectCategory: () => void;
}

function CategorySelect({ category, setCategory, closeSelectCategory }: CategorySelectProps) {
  return (
    <Container>
      <Header>
        <Title>Categoria</Title>
      </Header>
      <FlatList
          data={categories}
          style={{ flex: 1, width: '100%'}}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => (
            <Category>
              <Icon name={item.icon} />
              <Name>{item.name}</Name>
            </Category>
          )}
          ItemSeparatorComponent={() => <Separator/>}
      />

      <Footer>
        <Button title="Selecionar"/>
      </Footer>
    </Container>
  );
};

export default CategorySelect;