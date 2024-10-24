export function MoviesScreen() {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            {isLoading ? (
                <ActivityIndicator />
            ) : (
                <View>
                    {data.map((item) => (
                        <Text key={item.id}>{item.title} - {item.releaseYear}</Text>
                    ))}
                </View>
            )}
        </View>

    );
}