import java.util.*;

public class DistinctElementsInTwoSets {
    
    public static void findDistinctElements(int [] setOne, int [] setTwo){

        System.out.println("Set 1: " + Arrays.toString(setOne) + ", Set 2: " + Arrays.toString(setTwo));
        Map<Integer, Integer> map = new HashMap<>();

        for (int i = 0; i <setOne.length ; i++) {
            int element = setOne[i];
            if(map.containsKey(element)) {
                int count = map.get(element);
                map.put(element, count+1);
            }else
                map.put(element, 1);
        }

        for (int i = 0; i <setTwo.length ; i++) {
            int element = setTwo[i];
            if(map.containsKey(element)) {
                int count = map.get(element);
                map.put(element, count+1);
            }else
                map.put(element, 1);
        }

        int sum = 0;
        Set<Integer> set = map.keySet();
        Iterator<Integer> iterator = set.iterator();
        while (iterator.hasNext()){
            int key = iterator.next();
            if(map.get(key)==1)
                sum += key;
        }

        System.out.println("Distinct Elements Sum : " + sum);
    }

    public static void main(String[] args) {
        int [] setOne = {1, 2, 3, 5, 15, 45};
        int [] setTwo = {1, 9, 32, 4, 5, 2};
        findDistinctElements(setOne, setTwo);
    }
}