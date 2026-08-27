<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M12 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 0v6m8-.5v4.75a.7.7 0 0 1-.055.325.7.7 0 0 1-.348.366l-5.462 2.58a5 5 0 0 1-4.27 0l-5.462-2.58a.705.705 0 0 1-.401-.691V12.5m.429-.284 5.634-2.332a5.07 5.07 0 0 1 3.87 0l5.634 2.332a.693.693 0 0 1 .028 1.269l-5.462 2.543a5.06 5.06 0 0 1-4.27 0l-5.462-2.543a.691.691 0 0 1 .028-1.269\"/>";
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
