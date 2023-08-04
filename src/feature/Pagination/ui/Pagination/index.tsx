import { FC, useEffect } from 'react';
import { Box, Button, Flex } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/icons';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { usePagination } from '@/shared/lib/usePagination.ts';
import { ActivePage } from '@/feature/Pagination/ui/ActivePage';

interface Props {
  className?: any;
  totalCount: number;
  siblingCount?: number;
  currentPage: number;
  pageSize: number;
  onPageChange: (number: number) => void;
}

export const Pagination: FC<Props> = ({ currentPage, pageSize, totalCount, siblingCount, onPageChange, className = '' }) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  useEffect(() => {
    console.log(currentPage === 1);
  }, [currentPage]);

  if (paginationRange === undefined) {
    return null;
  }

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  const lastPage = paginationRange[paginationRange.length - 1];

  return (
        <Flex className={className} maxWidth={138} gap={'10px'} marginX={'auto'} justifyContent={'space-between'} alignItems={'center'} marginTop={10}>
            <Button variant={'outline'} isDisabled={currentPage === 1} onClick={onPrevious}>
                <Icon as={ChevronLeftIcon} />
            </Button>
            <Flex alignItems={'center'} border={'1px solid #C2C2C2'} borderRadius={'14px'}>
                {paginationRange.map((pageNumber, index) => (
                    <Box
                        key={pageNumber}
                        width={'51px'}
                        height={'51px'}
                        display={'flex'}
                        alignItems={'center'}
                        justifyContent={'center'}
                        cursor={'pointer'}
                        onClick={() => onPageChange(+pageNumber)}
                        position={'relative'}
                    >
                        { currentPage === pageNumber && <ActivePage/> }
                        { index + 1 }
                    </Box>
                ))}
            </Flex>
            <Button variant={'outline'} isDisabled={currentPage === lastPage} onClick={onNext}>
                <Icon as={ChevronRightIcon} />
            </Button>
        </Flex>
  );
};