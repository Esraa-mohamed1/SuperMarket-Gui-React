#include <iostream>
using namespace std;

void Sorting(int* arr, int n) {
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

int main() {
    int n;
    cout << "size of array ";
    cin >> n;

    int* arr = new int[n];         
    int* sortedArr = new int[n];   

    cout << "Enter " << n << " elements: ";
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
        sortedArr[i] = arr[i];      
    }

    Sorting(sortedArr, n);

    cout << "Disarranged array: ";
    for (int i = 0; i < n; i++)
        cout << arr[i] << " ";
    cout << endl;

    cout << "Arranged array: ";
    for (int i = 0; i < n; i++)
        cout << sortedArr[i] << " ";
    cout << endl;

    delete[] arr;    // to free the allocated memory and avoid memory leak 
    delete[] sortedArr; 

    return 0;
}
