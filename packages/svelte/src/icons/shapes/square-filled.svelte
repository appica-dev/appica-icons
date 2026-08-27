<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M18.825 2.25H5.175A2.925 2.925 0 0 0 2.25 5.175v13.65a2.925 2.925 0 0 0 2.925 2.925h13.65a2.925 2.925 0 0 0 2.925-2.925V5.175a2.925 2.925 0 0 0-2.925-2.925\"/>";
</script>

<Icon
  innerSvg={innerSvg}
  {...props}
/>
