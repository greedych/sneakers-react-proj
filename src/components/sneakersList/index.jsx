import SneakerCard from "../sneakerCard";
import { SneakersListStack, SneakersListTitle, SneakersStack } from "./styles";
import { connect } from "react-redux";

function SneakersList({ sneakers }) {
  console.log(sneakers);
  return (
    <SneakersListStack>
      <SneakersListTitle variant="h1">Sneakers</SneakersListTitle>
      <SneakersStack>
        {sneakers.map((sneaker) => (
          <SneakerCard
            key={sneaker.id}
            img={sneaker.image}
            name={sneaker.name}
            price={sneaker.price}
          />
        ))}
      </SneakersStack>
    </SneakersListStack>
  );
}

const mapStateToProps = (state) => {
  return {
    sneakers: state.sneakers,
  };
};

export default connect(mapStateToProps)(SneakersList);
