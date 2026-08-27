<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M7.47 12.5 3.215 7.481A.899.899 0 0 1 3.904 6h13.09A3 3 0 0 1 20 9v3c0 1.657-1.346 3-3.007 3M7 17h10M10.29 3h3.42a2 2 0 0 1 1.988 1.78l1.555 14A2 2 0 0 1 15.266 21h-6.53a2 2 0 0 1-1.988-2.22l1.555-14A2 2 0 0 1 10.29 3\"/>";
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
