<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M19 15a2 2 0 0 1 2 2m-.591 3.42c-.362.358-.86.58-1.409.58h-2a2 2 0 0 1-2-2v-2c0-.549.221-1.046.579-1.407M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2m-7 6v-1a2 2 0 0 1 2-2h4m4 0a2 2 0 0 1 2 2M3 3l18 18M3 17a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\"/>";
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
