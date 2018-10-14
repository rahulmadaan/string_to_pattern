***** ***** ***** *   * *****   ***** ***** ***** ***** ***** *   * *****   *     ***** *   * *****   ***** *   * ***** *****
*   * *  *    *   **  *   *     *       *   *   *   *     *   **  * *       *       *   * *   *         *   *   *   *   *
****  ***     *   * * *   *     *****   *   *****   *     *   * * * * ***   *       *   **    *****     *   *****   *   *****
*     * *     *   *  **   *         *   *   * *     *     *   *  ** *   *   *       *   * *   *         *   *   *   *       *
*     *   * ***** *   *   *     *****   *   *   *   *   ***** *   * *****   ***** ***** *   * *****     *   *   *   *   *****

Width and Height of each character is fixed to 5 units.
I have divided a character into 5 pieces

Ex:
     
                  1 :     *****     *****  *****     *****
                  2 :     *   *       *    *   *        *     
                  3 :     *****       *    *   *       *
                  4 :     *   *       *    *   *      *
                  5 :     *   *       *    *****     *****

and stored them in 5 arrays. Each array has set of all symbols for all characters. This program has 5 such arrays each for different height level (height_1, height_2, height_3 etc.) .

This time it only takes string in upper case and prints in upper case with no punctuation.

It first prints the height_1 symbols ('*') of all characters at once and then goes to height_2 and so on. 


