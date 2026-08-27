<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M14 8a2 2 0 0 0-2-2m0 11c3.314 0 6-4.03 6-9A6 6 0 1 0 6 8c0 4.97 2.686 9 6 9m0 0v1a2 2 0 0 1-2 2H7a2 2 0 0 0-2 2\"/>";
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
