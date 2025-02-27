
import { Box, Select, Input, Button } from "@chakra-ui/react";

interface SearchProps {
    search: string;
    setSearch: (value: string)=> void;
    handleSubmit: () => void;
    placeholder: string
}
interface SortProps {
    sort: string;
    setSort: (value: string) => void;
    option: string[]
  
}
export const Searching: React.FC<SearchProps> = ({search,setSearch,handleSubmit, placeholder}) => {

  return (
    <>
        <Box display={"flex"} gap = {2} minW = "1000px">
        <Input
          type="text"
          value={search}
          placeholder={placeholder}
          onChange={(e) => setSearch(e.target.value)}
          bg="gray.800"
          color="white"
          fontWeight="500"
          borderRadius="md"
        />
        <Button colorScheme="purple" onClick={handleSubmit}>Submit</Button>
        </Box>

    </>
  )
}


export const Sorting: React.FC<SortProps> = ({sort, setSort, option}) => {
return (
<>
      <Box display="flex" gap={4} justifyContent="space-between" mb={4} w="90%" maxW="1200px">
        <Box w="185px">
          <Select value={sort} onChange={(e) => setSort(e.target.value)} bg="#202020" borderRadius="md" color="white">
            <option value="" style={{ backgroundColor: "#202020" }}>Sort By</option>
            
            {option.map((option) => (
            <option key={option} value={option} style={{ backgroundColor: "#202020" }}>
            {option}
            </option>))}

          </Select>
        </Box> 
        </Box>
        </>
    )};
