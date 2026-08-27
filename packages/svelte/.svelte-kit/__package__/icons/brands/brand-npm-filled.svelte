<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M20.5 3.5h-17v17H12V6.9h5.1v13.6h3.4v-17z\"/>";
</script>

<Icon
  innerSvg={innerSvg}
  {...props}
/>
