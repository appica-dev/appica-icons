<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M3.5 17.5q8.5 7 17 0m-1.5 1L17 10l1-2 2 1 1.5-1.5L19 3c-5.052.218-5.99 3.133-7 6H6a3 3 0 0 0-3 3m2 6.5L7 9m1 11 2-5h4l2 5\"/>";
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
