This solution uses `Linking.addEventListener` to listen for URL changes and resolves a promise when a URL is available:

```javascript
import * as Linking from 'expo-linking';

export default function App() {
  const [initialUrl, setInitialUrl] = useState(null);

  useEffect(() => {
    const getInitialUrl = async () => {
      const url = await Linking.getInitialURL();
      setInitialUrl(url);
    };
    getInitialUrl();

    const urlSubscription = Linking.addEventListener('url', ({ url }) => {
      setInitialUrl(url);
    });

    return () => urlSubscription.remove();
  }, []);

  // ... rest of your component
  return (
    <View>
      {initialUrl && <Text>Initial URL: {initialUrl}</Text>}
    </View>
  );
}
```
This handles both the case where a URL is available immediately and the case where it becomes available later through the event listener.