<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M12.71 14.12l7.81-7.82a2 2 0 0 0-.105-2.715A2 2 0 0 0 17.7 3.48l-7.82 7.81m-6.17 1.93l.7-.71a5 5 0 0 1 3.54-1.469 5 5 0 0 1 3.54 1.469 5 5 0 0 1 1.469 3.54 5 5 0 0 1-1.469 3.54l-.71.7M3 12.5l8.5 8.5\"/>";
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
