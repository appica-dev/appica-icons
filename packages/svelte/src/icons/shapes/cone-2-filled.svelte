<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M12 1.25c5.382 0 9.75 1.459 9.75 3.907v.488c0 .163-.04.323-.118.466l-7.936 14.65a1.95 1.95 0 0 1-3.401-.017L2.368 6.111a1 1 0 0 1-.118-.464v-.488c0-2.45 4.368-3.909 9.75-3.909\"/>";
</script>

<Icon
  innerSvg={innerSvg}
  {...props}
/>
