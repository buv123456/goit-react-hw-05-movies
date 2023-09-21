import { Link } from 'react-router-dom';

export function GoBack(path) {
  return <Link to={path}>&#11164; Go back</Link>;
}
