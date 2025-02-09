import React from 'react';
import { Card, Icon } from 'semantic-ui-react';
import placeholder from '../assets/img/paw.png';

export const PetCard = pet => {
  const extra = (
    <Card.Content extra>
      <a href={`http://github.com/${pet.owner}`}>
        <Icon name="github" />
        {pet.owner}
      </a>
    </Card.Content>
  );

  return (
    <Card
      key={pet.id}
      image={pet.img || placeholder}
      header={pet.name}
      meta={`the ${pet.type}`}
      description={pet.description}
      extra={pet.owner ? extra : null}
    />
  );
};

document.addEventListener('DOMContentLoaded', function(event) {
  document.querySelectorAll('img').forEach(function(img) {
    img.onerror = function() {
      this.src = placeholder;
    };
  });
});
