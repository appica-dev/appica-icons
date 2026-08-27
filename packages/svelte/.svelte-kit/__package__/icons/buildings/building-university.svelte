<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M12 22H7.5m4.5 0h4.5M12 22v-2m-4.5 2V8m0 14H2M7.5 8H12M7.5 8h-1M12 8h4.5M12 8V4.982M16.5 8v14m0-14h1m-1 14h5M12 4.982V2.97c0-.474 0-.711.146-.859.46-.462 2.354.631 3.074 1.075.608.375.78 1.123.78 1.796h-4zM3 13v9m18-9v9m-4-9h5M2 13h5m3.5-1v.5m3-.5v.5m-3 3.5v.5m3-.5v.5\"/>";
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
