<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M9 9.625L5.5 2.5M15 9.625L18.5 2.5m-3.5 0l-1 2.375M12.5 9.15l-3-6.65m9 12.825c0 3.41-2.91 6.175-6.5 6.175s-6.5-2.765-6.5-6.175S8.41 9.15 12 9.15s6.5 2.765 6.5 6.175zm-8 0c0-.787.648-1.425 1.446-1.425h.107c.799 0 1.446.638 1.446 1.425s-.648 1.425-1.446 1.425h-.107c-.799 0-1.446-.638-1.446-1.425z\"/>";
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
