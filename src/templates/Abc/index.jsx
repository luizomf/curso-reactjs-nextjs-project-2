import { useEffect } from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';

export const Abc = () => {
  const { slug, id } = useParams();

  return (
    <div>
      <h1>
        ABC {slug} {id}
      </h1>
    </div>
  );
};
