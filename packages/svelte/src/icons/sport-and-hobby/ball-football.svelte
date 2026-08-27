<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M12 3a9 9 0 1 1 0 18.001A9 9 0 0 1 12 3m0 0v4m0 0 4.76 3.45M12 7l-4.76 3.45m9.52 0L15 16m1.76-5.55L20.5 9M15 16H9l-1.76-5.55M15 16l2.5 3M7.24 10.45 3.5 9m5.56 7.05L6.5 19\"/>";
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
