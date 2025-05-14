import { Cross1Icon, MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { IconButton, TextField } from '@radix-ui/themes';
import { PoisListSearchProps } from '@shared/contracts';
import { FC, useCallback, useRef } from 'react';
import { SearchInputForm } from './tokens';

export const Search: FC<PoisListSearchProps> = ({
  searchString,
  setSearchString,
  label,
  clearButtonAriaLabel,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const onClearButtonClick = useCallback(() => {
    setSearchString('');

    inputRef.current?.focus();
  }, [setSearchString]);

  return (
    <SearchInputForm>
      <TextField.Root
        aria-label={label}
        placeholder={label}
        type="search"
        value={searchString}
        onChange={(e) => setSearchString(e.target.value)}
        size="3"
        ref={inputRef}
      >
        <TextField.Slot aria-hidden>
          <MagnifyingGlassIcon height="16" width="16" />
        </TextField.Slot>

        {searchString ? (
          <TextField.Slot pr="3">
            <IconButton
              size="3"
              variant="ghost"
              onClick={onClearButtonClick}
              aria-label={clearButtonAriaLabel}
              type="button"
            >
              <Cross1Icon aria-hidden height="16" width="16" />
            </IconButton>
          </TextField.Slot>
        ) : null}
      </TextField.Root>
    </SearchInputForm>
  );
};
