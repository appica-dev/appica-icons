<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M6 12a2 2 0 1 1 0-4m0 4a2 2 0 1 0 0-4m0 4v8M6 8V6m6 12a2 2 0 0 1 0-4m0 4a2 2 0 0 0 0-4m0 4v2m0-6v-2m0-8v4m6 1a2 2 0 0 1 0-4m0 4a2 2 0 0 0 0-4m0 4v5m0-9V4m0 14v2M3 3l18 18\"/>";
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
