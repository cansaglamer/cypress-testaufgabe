Feature: magnoliatravels - Login Page

    Background: Vorbedingung
        Given I navigate to the magnoliatravels login page
        When I login to the page successfully

    Scenario Outline: Verifiziere Navigations-Elemente - Drop-Downs
        And I click on '<dropdownLinkName>' Drop Down
        And I click on '<subLinkName>' Link
        Then I should land on '<subLinkName>' page

        Examples:
            | dropdownLinkName | subLinkName |
            | Tours            | Active      |
            | Destinations     | Europe      |

    Scenario Outline: Verifiziere Navigations-Elemente - Restliche Links
        And I click on '<LinkName>' Link
        Then I should be presented with '<LinkName>' page

        Examples:
            | LinkName |
            | Stories  |
            | About    |
            | Contact  |
            | Members  |

    Scenario: Verifiziere Sprachänderung
        And I click on German Language Link
        Then I should be presented with User Links in German

    Scenario: Verifiziere Suche-Feature
        And I search for Europe
        And I select one of the more than three results
        Then I should be presented with the details page of that search result

    Scenario: Verifiziere Toureneigenschaften
        And I navigate to the Active Tours Page
        And I select Hut to Hut in the Swiss Alps
        Then I should be presented with the correct tour details

    Scenario: Buche die Tour
        And I navigate to the Active Tours Page
        And I select Hut to Hut in the Swiss Alps
        And I click Book Tour Button
        And I fill out the fields on the Book Tour page and send the data
        Then I should be presented with a confirmation message on the homepage
