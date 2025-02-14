import { GithubUserOrganization } from '../../types/github';

export const mockGithubUserOrganizations: GithubUserOrganization[] = [
  {
    login: 'github',
    id: 1,
    node_id: 'MDEyOk9yZ2FuaXphdGlvbjE=',
    url: 'https://api.github.com/orgs/github',
    repos_url: 'https://api.github.com/orgs/github/repos',
    events_url: 'https://api.github.com/orgs/github/events',
    hooks_url: 'https://api.github.com/orgs/github/hooks',
    issues_url: 'https://api.github.com/orgs/github/issues',
    members_url: 'https://api.github.com/orgs/github/members{/member}',
    public_members_url: 'https://api.github.com/orgs/github/public_members{/member}',
    avatar_url: 'https://github.com/images/error/octocat_happy.gif',
    description: 'A great organization',
  },
];
