export default interface DeveloperInterface {
  rank: number;
  username: string;
  name: string;
  url: string;
  avatar: string;
  since: string;
  popularRepository: {
    repositoryName: string;
    description: string | null;
    url: string;
  };
}
