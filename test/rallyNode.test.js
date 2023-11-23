const axios = require('axios');
const rallyNode = require('./rallyNode');

jest.mock('axios');

describe('RallyNode', () => {
  const mockApiEndpoint = 'https://example.com/api';
  const mockApiKey = 'YOUR_TEST_API_KEY';

  beforeEach(() => {
    rallyNode.configure({
      apiEndpoint: mockApiEndpoint,
      apiKey: mockApiKey
    });
  });

  test('Make Request', async () => {
    const mockRequestData = { /* Test request data */ };
    const mockResponseData = { /* Test response data */ };

    axios.post.mockResolvedValueOnce({ data: mockResponseData });

    const response = await rallyNode.makeRequest(mockRequestData);

    expect(response).toEqual(mockResponseData);
    expect(axios.post).toHaveBeenCalledWith(
      mockApiEndpoint,
      mockRequestData,
      { headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${mockApiKey}` } }
    );
  });
});
