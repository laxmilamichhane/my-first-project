import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import styles from './styles';

const New = () => (
  <ScrollView>
    <View style={{ flex: 1, marginHorizontal: 10 }}>
      <View style={{ flexDirection: 'row-reverse' }}>
        <Image
          source={{
            uri:
              'https://cdn2.iconfinder.com/data/icons/people-80/96/Picture1-512.png',
          }}
          style={styles.img}
        />
      </View>
      <Text style={styles.name}>Hey Laxmi,</Text>
      <Text style={styles.description}>Find a course you want to learn</Text>
      <Image
        source={{
          uri:
            'https://previews.123rf.com/images/sanek13744/sanek137441703/sanek13744170300104/73487466-search-bar-field-vector-interface-element-with-search-button-flat-vector-illustration-on-white-backg.jpg',
        }}
        style={styles.image}
      />
      <View style={{ flexDirection: 'row', marginTop: 50 }}>
        <Text style={styles.category}>Categories</Text>
        <Text style={styles.see}>See all</Text>
      </View>

      <View style={{ flexDirection: 'row' }}>
        <Image
          source={{
            uri:
              'https://c7.uihere.com/files/214/167/763/business-marketing-advertising-icon-business-marketing-icon.jpg',
          }}
          style={styles.img2}
        />

        <Image
          source={{
            uri:
              'https://cdn3.vectorstock.com/i/1000x1000/97/72/business-clipart-jump-coin-vector-10729772.jpg',
          }}
          style={styles.img3}
        />
      </View>
    </View>
    <View style={{ flexDirection: 'row' }}>
      <Image
        source={{
          uri:
            'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTDw0SEBARDhIPExIWEhAQEBATFRcTFREWFxoYFRUZHSkgGholGxgXITMhJSktLi4uFyAzODMtNygtMCsBCgoKDg0OGxAQGzAmHyI3LS03NTM1NzA1LSsvLS8tNzUwMysyLzc3Ny01LTItMDAvNy43NTYuNS0vLTcwKy0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAAAQcFBgMECAL/xABFEAACAgEBBQQECQkHBQEAAAAAAQIDBBEFBhIhMRNBUWEHInGBCDIzNUJScnSRFCNiobGytMLwFUNTgpLR8ZOiwdLhVP/EABsBAQACAwEBAAAAAAAAAAAAAAAEBQIDBgEH/8QAKxEBAAICAQIEBQQDAAAAAAAAAAECAwQREiEFEzFBBiJRYYEUobHRMkKR/9oADAMBAAIRAxEAPwC8QAAAAEAEgQiSCQAAAAAAAAAAAAAAAAAAAAAAAAAAAgEgACABJDJAEBEgCCQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACESQSAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACCQBBIAAAAAAAAAAAAAAAAAAAAAfPEtdO/rp36H0AAAAAAAAAAAAEACQAAAAAAAAAAIZIAAAAAQBIAAGi71b7cEpU4jTkuU7uTUX4Q7m/Pp7e7k9I+8borjj1PS29NyknzhV05eDk9Vr4KXkVHk7UjDkvWl4LovayXgw8x1WTdbBE/NZu+622pQzqpznKXbPgslJttqb0TbfhLR+xMts88Y+TxQjJctV+D/5L/wL+Oqmf+JCEv8AVFP/AMnmzSImJN2sRMTDsAAioQAAAAAAAAAAAAAAAAAAAAAAAAAABBIAAHzY9E34JgedN/dvuzMypp85WSjDn0rrfAmvalr7WzTVkrXTXXXvOrtHLcpNt6vRL8F/vqdSFpZWtFZ6Y9ljOXp+WPZuexcj83NfVf7UeltmU8FFEH1hXXF/5YJHnb0cYcbMiMrZKFFMu1vnJ6RVdej5/ak4x06+sb7vH6TpSbhicNEP8azh7SXnGL5RXt1fsPMuK2XitUXe2K1iIlazIU0+jT9556v247nrbku1v/Etcl7tXojmokuTWntWh5+gn3sqbbvH+r0CCuPR5fdPIknbY6q4Nyi5tx1fKK0fTvfL6pY5Dy4/Lt08pWHL5lergABrbQAAQCQAAAAAAAAB0NubXqxMe7JyJ8FVMdZPq+uiSXe22kl4srGr0sZ9ydmHsHJvobfBb+elxJNrXWNbj3dE3p4na+EXY1sihJtKeZUpLxXY3y0fvSfuLJ2VTGGPjwhFQjCquMYxWiUVBJJLuWgFcbM9IW1bL8euzYGRTC22uE7XHI0hGU0nN/m+iTb5+B1fTni7Um8P8gWTOhKashh9o59rryc41+s48PTuT18UW2cGZlwqrnZbONddabnObSiku9sDzhuJs/bq2lhPg2lVBWwdssmORCrseJcan2nqtcOvLr4c9D0nbdGK1nKMF4yaS/FlXZG/+TnXzo2ZVOFcFrO5xirHHV+s+P1aYNJ/G9Z/otaGsQ2Nh5mRZC7ajzsqNcpRow/z9k+FauNOVe+CyWnPhXg/AC7Ibaxm9I5OPJ+Cvqb/AA1O8pa81zT70ebsHbmy6W0obZjwtpqa2fJpp6NShwxfLppqjftz94cK2ShiZCdkuaqgpYeRr3aVTfZ3tJav1n0+KwLTRwZ9soVXThB2ShCcowWuspKLaitPF8jC4W8UYyUL5LRvhjdwuGkvqXwfOuWjXPkvFR5J7EB5Cv3P2lKTf9mZqTbaX5Ndy59PimPzNj5NFlcMnHuxpWvSCvrnVxc0uTmktNWufcezSsvhCUxex4yaTlDJqcX3rWM09PczPrnnmWXVPPKl8navZV/k9Ulwpp2Tj9Oa1Wq/RWstPa33mOjl89Xq9e9mJTOzjpst6Zee0ImSvVM2t6szTZqkzatkQ4ao68nL1n7/AP5oYDY+C5yjqm46pJac5PuSXeXTuRuVJShkZkeHh0ddD6690rF3eUfx8DZly1x15sheXOS3TVsW42x3j4qc1pbfpOafWK09WL9i5+2TNkAKO9ptabStKUilYrAADFkAACAABIAAAAAAAKq+Ed804v32r+HyCzsH5Kr7EP3UVj8I75pxfvtX8PkFnYPyVX2IfuoDnKm3xzLNpZqxKrOyxMfjlbZ9FKr5S6fio/Fiu9vXo9Y2DvRnSqw8icNYycVCEl1UrJKCkl5OWvuKb3j2vZg4WOsScqL9o3WN216KUMbFfZxgtfrWScl5agYDeLalt6/I8Ki/F2fXLlX2dkZ3yX97kS01m3onw9Fy8Fp1dnbAti4SjC2EoNOMoxnGUZJ6pprmmnz1Nl2Bt7ad04VxzMm6c3ooqa5v/jr4F1bAw7KqUrrp5Nsuc5SlyX6MfLz7/wAEgqLM2D/aMHY6uy2jCP5z1OCGXGK+MuWkb0uvdL93Bbk7JcNsbNbi0438001o+GSaZ6M7Ty5+Bru092oTzMfKrSrsrsg7F3TWmmvlJePf+AFR7t70zuvlg5s07JSlDEy7Hzb4nw4+S/pwl0jN6uLfepNFlejzeCcnbh38Sso17Nz+NwRfDKub+tB8vNePC26J3mwkp3fak3zS05t9WWZj23VvZOffXOu+2hTvUklOVmPwwlOX1XbS48vNgXEVt8IH5lf3in+YsZWctevsK39Pz12LLVaaX09/2gK/j6II1012Ze1KcftIRlGEKJWyaaT5Jyi3+B9YW6eDW1+cyMnTvcK60/8ALq+XvMH/AGhbZwSnZKTcY66y7kkubflp1O5iXNNd/lyT/Erdjf2o5jHbpj7ev/ZQsmTnssbYObRjtdhTXVLpxyg5z/1ybaXktEbVjbyT5OUYTXjHVP8AHmir8PIfLXmvPqZ7CvcdGnqn3dzOfzbu3W3V5k8/fv8Ayzx5OOyzMHatdmiT4ZfVlyfu8Tvmg0T1SaNi2RtRvSFj115Rk/2P/csPD/G/MtGPP2mff+0qO7OAA6IAAAAAAAAAAAAAFVfCO+acX77V/D5BZ2F8lV9iH7qKx+Ed804v32r+HyCzsH5Kr7EP3UBgN+E1jVrXk7Vr7Oysf7Uimd/MWy7N2FRTB2zt2bjOuuKbfaWWWynp3Lpq23okufLUvDfOhywrmutXDZ/lhJOf/ZxFVb37Wtr2RTbjxjGyNk8LJyYp9rXRJu2uEJfRhJOKcl3pLr0DN7lOrFy6cXHlC+6c5rKyUtYpqLfY0P6qaWsu9r3K0lDTp79SgPRZk67RwY/pSS/6Uy8N39t15dKsqej5ccG/WhLwfl4PvA77g9O7n1Ch1936jkNb3x3qhh16LSd816lbfJL60/Ly7/xaCrtq49eFxZWTCFuTJuWJiWJuMXryvvS7k/iw72teWmsfncvMsvwLLr7JXWW7Vs4rJ6ay4sGDl5JLgjyXJJJI0zenbDtnZO2zjnNtuUmtW/67jdt3sGVODsvFXq35KsyZx0fKzLnGvH18HwRWvhqBcmyE3j4zfV1VP39mtTRPT8n/AGLLX/8ART/MWRVWoxjFclFJJeSWiK4+ED8yy+8U/wAwGNy9ysHIposxcivGudVfFBt9lJ8K7nzg9fDl5GDt3Qvq14oRmn9OMuKD5ctGidnNqupp6erH91Gw7Oz5Lv095yO1vXmZ7R+F3n+HqdPVSzFYmyJ8tYt9OuiRnMTA004nr5LoZ3Ayq5fKUwn4tJRl7eWmpsWLg0NKUK4NPva1/aadfWnd/wALxz9J9VLk0rYZ4s1nDxZz5Qi35rovf0Nk2bstV6Sl60/HuXs/3MjGOnJcvJEl5peDYdeeu3zW/aPw8AAXAAAAAAAAAAAAAAKq+Ed804v32r+HyCzsH5Kr7EP3UVj8I75pxfvtX8PkFnYPyVX2IfuoDmlFNNNap9U+mhTW2caGDlZGJmRlPZ+fDgk+baqUtYWx111spk1r36NS0bcUXMYnebd+nNx5U3p6dYWR0U656cpQfjz6Pk02mmmBR+6Owr8DeDZlFrVtds7JY+TD5O6rsLGpwa1WvOOsdeWq6ppvo7rb22Y867apc9FxRfxZR74yXh+w3HAqz9j2dnfCGZhRnxVTkn2UZvVcVcubx5vXnF6xfE9NW2zU8rdXZs5P8m2lZs5832GfS5wXPpG+D4VHwUtXoBum1968mVDzMLJslj6pXVNVueNY/oz9XnB/Rn7nzNQzPSTnLXhzJr/LV/6nNutu9djZEbats7Isg042VwusvV1T+NXZSo80/byNkxfR7s15Ft8I230p8Ua8mx04tS5NqTaVtiT10T9Vrk33gYvcnb+1Mh/lmVm3xwKZcoqFClk2rXSmn1FquT4pdElLmtG47buLs+zJzcjaGRzSnLg66O3TgfD4wrj6i8X5xZk69gSyJQ4tYUQjw8Sh2XqL+7xqv7uvl8bq0o6OXKUdvxseNcIQrioQglGMYrRKKWiSQHKVr8IH5ll94p/mLKK1+ED8yy+8U/zAYKvZzjXT3p1waa5ppwTTTXcdjHqaZi/RptPtIww7HrrFvHbf0km5V6+DWsl5prvWm4WbOabWnTufJnCb1b4bz1ek+kuy/UzWPLv68R+YcGJNrR+BsWzcxwaa5xl8ZeXj7TCwxmvonfxotR0ZV+fbFeMmOeJhB2YreG4wkmk1zT6M+jGbFu1i4P6PNex/1+syZ9E0tqNnBXLHv/Pu57JTotMAAJbAAAAAAAAAAAAAAa7v9uxHaOBdiuSrk2p1WNaqNsejfk9XF+UmaBs/a282LXDHezqMxUJQje5KTnGPJNyjateWnNpPx5lwgCr9mbzbwyvx43bIoqqnbWrbFrrGtzSnJfnuqjqy0AAIlHVNPmn1TNZ2r6P9nXvWeLGD586J2U831bjW1Fv2pmzgDTsP0bYVfxO3S8Hc/wBumv6zYMLYdFXC4VLWPxZWSlZKP2ZTbcfcZEADr59k41XSqip2RhN1wfSU1FuK970OwAKHy/S9teqc4W7PxYTrk4yi1dykno18qavvbvfn7UjVVlQqx6Kp8fZ0qS4paNJycpSbaTaXRcyw/S1u7w3LLjHWu/SNun0bUtIyfgpRSXtj5lcTxGunNFfl2r0tNZh0+h4RrZ8dcvVM/WPv9HLsi2VcoWV8p1TjOD/Si01+tI9GxqryKqrUvlIRnGS66Simvb1PO+JVpH2l/bkvXZuDr3UxXuXJfqRp1q0zTfHeOYn6tnxBj6K0vXtMTMPi3Y818Vqa/BnF+QWL6D/UbICLl+G9W881mY/P9uejbye7D7OxZxmm46LRp81/XXQzABZ6OlTTxeXSZmOee7RkyTeeZAATWAAAAAAAAAAAAAAAAAAAAAAAAAAAOvm4kLa512xU4WJqUX0af9dSnN69zbcSUpwUrsd9LEtXBeFmnT7XR+XQusiS16kfPr1zR39U/Q8Qyal+a94n1h5yUS/N3cV1YeJW+sKa1L7XAtf16mJz9x8SyyFkYOlqcZSjXooTSerUoPkk/LQ2g0aerbDa02TfFvE8e3SkUiY45meQAE9RgAAAAAAAAAAAAAAAAAAAAAAAAIRIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAhkgAAAAAAhEgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABDJAAgkAAAAAAAAAAAAAAAAAAAAAAA//2Q==',
        }}
        style={styles.img4}
      />
      <Image
        source={{
          uri:
            'https://previews.123rf.com/images/vasabii/vasabii1608/vasabii160800069/60929459-vector-illustration-of-ui-ux-developmentflat-line-design-concept-.jpg',
        }}
        style={styles.img5}
      />
    </View>
  </ScrollView>
);
export default New;
