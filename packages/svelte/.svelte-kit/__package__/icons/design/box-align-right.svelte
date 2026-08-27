<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M8.998 20.003h.01m-5.01 0h.01m-.01-5.001h.01m-.01-6h.01m-.01-5h.01m4.99 0h.01m4.99 16.001v-16h5a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1z\"/>";
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
