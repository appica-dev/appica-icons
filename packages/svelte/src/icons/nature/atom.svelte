<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M12 12v.01m7.425-7.436c-1.64-1.64-6.3.354-10.396 4.456-4.1 4.1-6.095 8.755-4.455 10.396 1.64 1.64 6.301-.354 10.397-4.456 4.1-4.101 6.095-8.754 4.454-10.396m-14.85 0c-1.641 1.64.353 6.301 4.455 10.397 4.1 4.1 8.755 6.095 10.396 4.454 1.64-1.64-.354-6.3-4.456-10.396-4.101-4.1-8.754-6.095-10.396-4.455\"/>";
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
