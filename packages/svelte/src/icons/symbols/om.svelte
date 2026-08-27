<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M3.387 7C4.03 5.816 5.406 5 7 5c2.21 0 4 1.567 4 3.5S9.21 12 7 12c2.21 0 4 2.015 4 4.5S9.21 21 7 21s-4-2.015-4-4.5a4.9 4.9 0 0 1 .423-2.017m10.648 2.527C14.398 19.287 15.81 21 17.5 21c1.933 0 3.5-2.239 3.5-5s-1.567-5-3.5-5c-.96 0-1.868.606-2.5 1.5-.717 1.049-1.76 1.7-2.936 1.7-.92 0-1.766-.406-2.434-1.087M17 3l2 2m-7-2q2.5 5.5 9 5\"/>";
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
