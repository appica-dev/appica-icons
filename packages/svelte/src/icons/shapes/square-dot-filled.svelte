<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M18.825 2.25a2.925 2.925 0 0 1 2.925 2.925v13.65a2.925 2.925 0 0 1-2.925 2.925H5.175a2.925 2.925 0 0 1-2.925-2.925V5.175A2.925 2.925 0 0 1 5.175 2.25zM12 10.05a1.95 1.95 0 0 0-1.945 1.804L10.05 12l.005.146A1.95 1.95 0 1 0 12 10.05\"/>";
</script>

<Icon
  innerSvg={innerSvg}
  {...props}
/>
