# How to use the app's navigation
There are 3 tabs at the bottom, that each have a stack navigator. This means that any page that is opened within a tab, stays in that tab.
## How the navigation works
### Add a page component to the stack navigator
In the `navigation/navigators` folder, there are 3 stack navigators, one for each tab. In order to be able to navigate to a certain page within a tab, the page must be configured in the `pages` array, located at the top of the file. Add the page by giving it a `name` and a `component`attribute. The page can now be navigated to by using `navigation.navigate(<name>)`

### `navigation` prop

To be able to use the `navigation` prop in your page component, you have to declare it a prop.

Example:

````
function  HomePage({navigation}: {navigation: any}) {
    return (
        <View style={{flex: 1, backgroundColor: "#fff", justifyContent: "center", alignItems: "center"}}>
            <Text>Home Page</Text>
            <Button title={"About Us"} onPress={() => navigation.navigate("AboutUs")}></Button>
            <Button title={"Rent A Car"} onPress={() => navigation.navigate("RentACar")}></Button>
            <Button title={"Rentals"} onPress={() => navigation.navigate("Rentals")}></Button>

        </View>
    )
}
````

The navigation object is taken in as a prop, given the `any` type, and used to navigate.


