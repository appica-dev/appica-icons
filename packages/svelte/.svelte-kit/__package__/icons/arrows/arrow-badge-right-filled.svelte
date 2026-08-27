<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m7.209 6.25-.107.006a.958.958 0 0 0-.642 1.551L9.816 12 6.46 16.193a.958.958 0 0 0 .748 1.557h5.75a.96.96 0 0 0 .747-.36L17.54 12.6a.96.96 0 0 0 0-1.198l-3.834-4.792a.96.96 0 0 0-.747-.359z\"/>";
</script>

<Icon
  innerSvg={innerSvg}
  {...props}
/>
