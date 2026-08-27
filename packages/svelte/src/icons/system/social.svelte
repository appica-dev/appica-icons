<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M12 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 0v4m0 0a3 3 0 1 1 0 6 3 3 0 0 1 0-6m-5.3 6.8 2.8-2m7.8 2-2.8-2M3 19a2 2 0 1 0 4 0 2 2 0 0 0-4 0m14 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0\"/>";
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
