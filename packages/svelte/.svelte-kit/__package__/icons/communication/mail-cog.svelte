<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M12 19H5a2 2 0 0 1-2-2V7m0 0a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2M3 7l9 6 9-6m0 0v5m-1.999 9a2 2 0 0 1 0-4m0 4a2 2 0 0 0 0-4m0 4v1.5m0-5.5v-1.5m3.031 1.75-1.299.75m-3.463 2-1.3.75m0-3.5 1.3.75m3.463 2 1.3.75\"/>";
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
