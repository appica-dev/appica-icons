<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M16.388 12.51 12 3 4.03 20.275c-.07.2-.017.424.135.572.15.148.374.193.57.116l7.266-2.463m7 2.5a2 2 0 1 1 0-4m0 4a2 2 0 0 0 0-4m0 4v1.5m0-5.5v-1.5m3.031 1.75-1.299.75m-3.463 2-1.3.75m0-3.5 1.3.75m3.464 2 1.3.75\"/>";
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
