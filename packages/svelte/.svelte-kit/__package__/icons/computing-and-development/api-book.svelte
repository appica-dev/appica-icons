<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M12 19a9 9 0 0 0-9 0V6a9 9 0 0 1 9 0m0 13q.487-.282 1.006-.5M12 19V6m0 0a9 9 0 0 1 9 0v6m-1.999 9a2 2 0 0 1 0-4m0 4a2 2 0 0 0 0-4m0 4v1.5m0-5.5v-1.5m3.031 1.75-1.299.75m-3.463 2-1.3.75m0-3.5 1.3.75m3.463 2 1.3.75\"/>";
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
