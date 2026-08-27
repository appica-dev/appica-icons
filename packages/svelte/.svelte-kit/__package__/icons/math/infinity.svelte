<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M13.941 9.39l.232-.218a4 4 0 0 1 4.359-.868A4 4 0 0 1 21.002 12a4 4 0 0 1-2.469 3.696 4 4 0 0 1-4.359-.868A10 10 0 0 1 12.001 12a10 10 0 0 0-2.172-2.828 4 4 0 0 0-4.359-.868A4 4 0 0 0 3 12a4 4 0 0 0 2.47 3.696 4 4 0 0 0 4.359-.868l.234-.219\"/>";
</script>

<Icon
  innerSvg={innerSvg}
  fill={"none"}
  stroke={"currentColor"}
  stroke-width={"1.5"}
  stroke-linecap={"round"}
  stroke-linejoin={"round"}
  {...props}
/>
